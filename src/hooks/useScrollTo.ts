import { useLenis } from "lenis/react";

export const useScrollTo = () => {
  const lenis = useLenis();
  return (id: string) => {
    lenis?.scrollTo(`#${id}`, {
      offset: 0,
      onComplete: () => {
        window.history.pushState(null, "", `#${id}`);
      }
    });
  };
};
