import { Container } from '@/components';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-wrapper">
          <div>
            &copy; {new Date().getFullYear()} Next.js WordPress site using
            WPGraphql by{' '}
            <Link
              href="https://x.com/ispykenny"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ispykenny
            </Link>
          </div>
          <div>
            10up logo and name belongs to{' '}
            <Link
              href="https://10up.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              10up
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
