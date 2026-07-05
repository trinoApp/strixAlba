import { useEffect, useRef, useState, useCallback, type Dispatch, type SetStateAction } from "react";

type StepState = number | null;

interface ScrollLockOptions {
  prevSectionId?: string;
  nextSectionId?: string;
  enabled?: boolean;
}

const STEP_DEBOUNCE_MS = 350;
const TOUCH_THRESHOLD = 30;

export function useScrollLockSteps(
  itemCount: number,
  options: ScrollLockOptions = {}
): [StepState, Dispatch<SetStateAction<StepState>>] {
  const [open, setOpen] = useState<StepState>(0);
  const [isLocked, setIsLocked] = useState(false);
  const wasAbove = useRef(false);
  const lastStepChange = useRef(0);
  const touchStartY = useRef(0);
  const autoNavTimer = useRef<ReturnType<typeof setTimeout>>();
  const openRef = useRef(open);
  const isLockedRef = useRef(isLocked);
  const itemCountRef = useRef(itemCount);
  const nextSectionId = options.nextSectionId ?? "team";
  const prevSectionId = options.prevSectionId ?? "advantage";
  const enabled = options.enabled ?? true;
  const nextSectionIdRef = useRef(nextSectionId);
  const prevSectionIdRef = useRef(prevSectionId);

  openRef.current = open;
  isLockedRef.current = isLocked;
  itemCountRef.current = itemCount;
  nextSectionIdRef.current = nextSectionId;
  prevSectionIdRef.current = prevSectionId;

  const lockPage = useCallback(() => {
    const sb = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${sb}px`;
  }, []);

  const unlockPage = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.documentElement.style.paddingRight = "";
  }, []);

  // Ensure scroll lock is removed on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, []);

  // Track section position via scroll to lock only when its top edge reaches viewport top
  useEffect(() => {
    if (!enabled) {
      unlockPage();
      setIsLocked(false);
      return;
    }

    const steps = document.getElementById("steps");
    if (!steps) return;

    // Initialize wasAbove: true only if the section is fully below the viewport
    const initRect = steps.getBoundingClientRect();
    wasAbove.current = initRect.top > window.innerHeight;

    const handleScroll = () => {
      const rect = steps.getBoundingClientRect();
      const vh = window.innerHeight;

      // Detect section scrolled past downward (exited at top) → release
      if (isLockedRef.current && rect.bottom < -50) {
        unlockPage();
        setIsLocked(false);
        return;
      }

      // Track whether user is above the section (section is below viewport)
      // Reset to first step so it's highlighted on re-entry
      if (!isLockedRef.current && rect.top > vh) {
        wasAbove.current = true;
        setOpen(0);
      }

      // Lock when entering from above and section top reaches viewport top
      if (!isLockedRef.current && wasAbove.current && rect.top <= 0 && rect.bottom > 0) {
        lockPage();
        setOpen(0);
        setIsLocked(true);
        wasAbove.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lockPage, unlockPage, enabled]);

  // Event handlers active only while locked
  useEffect(() => {
    if (!isLocked) return;

    const navigate = (direction: 1 | -1) => {
      if (!isLockedRef.current) return;

      const now = Date.now();
      if (now - lastStepChange.current < STEP_DEBOUNCE_MS) return;

      const currentOpen = openRef.current;
      const safeStep = currentOpen ?? 0;
      const count = itemCountRef.current;

      if (direction > 0) {
        if (safeStep < count - 1) {
          setOpen(safeStep + 1);
          lastStepChange.current = now;
          if (safeStep + 1 === count - 1) {
            clearTimeout(autoNavTimer.current);
            autoNavTimer.current = setTimeout(() => {
              if (!isLockedRef.current) return;
              isLockedRef.current = false;
              unlockPage();
              setIsLocked(false);
              window.scrollBy({ top: 200, behavior: "smooth" });
            }, 400);
          }
        } else {
          isLockedRef.current = false;
          unlockPage();
          setIsLocked(false);
          window.scrollBy({ top: 200, behavior: "smooth" });
        }
      } else {
        if (safeStep > 0) {
          setOpen(safeStep - 1);
          lastStepChange.current = now;
          if (safeStep - 1 === 0) {
            clearTimeout(autoNavTimer.current);
            autoNavTimer.current = setTimeout(() => {
              if (!isLockedRef.current) return;
              isLockedRef.current = false;
              unlockPage();
              setIsLocked(false);
              window.scrollBy({ top: -200, behavior: "smooth" });
            }, 400);
          }
        } else {
          isLockedRef.current = false;
          unlockPage();
          setIsLocked(false);
          window.scrollBy({ top: -200, behavior: "smooth" });
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) navigate(1);
      else if (e.deltaY < 0) navigate(-1);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;
      navigate(deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const nextKeys = ["ArrowDown", "PageDown", " ", "Space"];
      const prevKeys = ["ArrowUp", "PageUp"];

      if (nextKeys.includes(e.key)) {
        e.preventDefault();
        navigate(1);
      } else if (prevKeys.includes(e.key)) {
        e.preventDefault();
        navigate(-1);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      if (!targetId) return;

      const steps = document.getElementById("steps");
      const target = document.getElementById(targetId);
      if (!steps || !target) return;

      if (
        steps.compareDocumentPosition(target) &
        Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    document.addEventListener("click", handleClick, true);

    return () => {
      clearTimeout(autoNavTimer.current);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isLocked, unlockPage]);

  return [open, setOpen];
}
