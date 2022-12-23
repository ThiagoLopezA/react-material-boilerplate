import { useState } from 'react';

export default function useToggler() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (): void => setIsToggled(!isToggled);
  return { isToggled, handleToggle };
}
