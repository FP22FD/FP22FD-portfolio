import { PiHeartStraightFill } from 'react-icons/pi'

function Footer() {
  return (
    <footer
      className="col-span-12 row-start-3 mt-4 border-t"
      role="contentinfo"
      aria-label="Footer section"
    >
      <div className="bg-primary-defaultBlue text-primary-darkBlue flex flex-col items-center">
        <div className="flex flex-col items-center p-2 text-center text-xs font-medium">
          <p>
            Developed and designed with
            <PiHeartStraightFill
              className="text-primary-darkBlue mx-2 inline"
              aria-label="heart icon"
            />
            <span>by Fernanda Gomes</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
