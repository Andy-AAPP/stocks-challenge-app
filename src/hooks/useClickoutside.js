import { useEffect } from 'react'

const useClickoutside = (ref, action) => {
  const handleClickOutside = ({ target }) => {
    const { current } = ref;
    if (current && !current.contains(target)) {
      action();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default useClickoutside