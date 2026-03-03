export const handleSmoothSroll = (
  id: string,
  isMobileMenuOpen: boolean,
  setIsMobileMenuOpen: Function
) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
};
