import { PiHeartStraightFill } from 'react-icons/pi';

function Footer() {
  return (
    <footer className="col-span-12 row-start-3 mt-4 border-t" role="contentinfo" aria-label="Footer section">
      <div className="flex flex-col items-center bg-primary-defaultBlue text-primary-darkBlue">
        <div className="flex flex-col items-center p-2 text-center text-xs font-medium md:text-sm">
          <p>
            Developed and designed with
            <PiHeartStraightFill className="mx-2 inline text-primary-darkBlue" aria-label="heart icon" />
            <span>by Fernanda Gomes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
