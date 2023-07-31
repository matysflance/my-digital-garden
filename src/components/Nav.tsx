interface NavProps {}

export const Nav = ({}: NavProps) => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/tips">Tips</a>
      <a href="/resources">Resources</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};
