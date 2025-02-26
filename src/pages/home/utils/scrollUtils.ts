export function handleScroll(event: React.MouseEvent, targetId: string) {
  event.preventDefault();

  let section: HTMLElement | null = null;

  if (targetId === 'home') {
    section = document.documentElement;
  } else {
    section = document.getElementById(targetId);
  }

  if (section) {
    const yOffset = -80;
    const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  }
}

export function handleContactClick(e: React.MouseEvent) {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
