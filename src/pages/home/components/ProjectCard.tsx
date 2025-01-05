import githubIcon from '/src/assets/icons/githubrounded.svg';
import webIcon from '/src/assets/icons/web.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '/src/customSlick.css';

interface Icon {
  src: string;
  description: string;
}

interface ImageType {
  src: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  icons: Icon[];
  githubLink: string;
  websiteLink: string;
  imageSrc: string | ImageType[];
  activeFilter: string;
}

import { useState } from 'react';

function ProjectCard({
  title,
  description,
  icons,
  githubLink,
  websiteLink,
  imageSrc,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const images = Array.isArray(imageSrc)
    ? imageSrc
    : [{ src: imageSrc, description: '' }];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sliderSettings = {
    customPaging: (i: number) => {
      const image = images[i];
      if (!image) {
        return <></>;
      }

      return (
        <a onClick={() => handleImageClick(image.src)}>
          <img
            src={image.src}
            alt={`Thumbnail ${i + 1}`}
            className="mt-2 h-16 object-cover"
          />
        </a>
      );
    },
    appendDots: (dots: JSX.Element) => (
      <div
        style={{
          backgroundColor: 'transparent',
          padding: '10px',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    dots: true,
    dotsClass: 'slick-dots-custom slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="flex w-full flex-col justify-between rounded bg-neutral-ofWhite p-4 text-primary-darkBlue shadow-lg">
      <div className="mb-4 flex h-full flex-col justify-between text-start">
        <div>
          <h2 className="mb-2 text-lg font-bold">{title}</h2>
          <p className="mb-4 text-sm md:text-base">{description}</p>
        </div>

        <div className="flex flex-col items-end justify-end gap-1">
          <div className="mb-4 flex gap-4">
            {icons.map((icon, index) => (
              <div key={index} className="group relative">
                <img src={icon.src} alt="Icon" className="h-6 w-6" />
                <div className="absolute left-1/2 top-full z-10 hidden w-max -translate-x-1/2 rounded bg-neutral-default px-2 py-1 text-typography-grey opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
                  {icon.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            <a
              href={githubLink}
              target="_blank"
              className="flex items-center rounded border p-2 text-typography-grey hover:scale-105 hover:text-typography-default"
            >
              <img src={githubIcon} alt="GitHub" className="mr-2 h-6 w-6" />
              <span>View More</span>
            </a>
            <a
              href={websiteLink}
              target="_blank"
              className="flex items-center rounded border p-2 text-typography-grey hover:scale-105 hover:text-typography-default"
            >
              <img src={webIcon} alt="Website" className="mr-2 h-6 w-6" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-fit w-full">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              {image.description && (
                <div className="text-right text-sm">{image.description}</div>
              )}
              <img
                src={image.src}
                alt={`Project Thumbnail ${title}`}
                className="h-72 w-full cursor-pointer rounded object-cover"
                onClick={() => handleImageClick(image.src)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {isModalOpen && (
        <Modal imageSrc={selectedImage} closeModal={handleCloseModal} />
      )}
    </div>
  );
}

export default ProjectCard;

interface ModalProps {
  imageSrc: string;
  closeModal: () => void;
}

const Modal = ({ imageSrc, closeModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-4/5 max-w-4xl">
        <button
          className="absolute -top-10 right-0 rounded bg-white p-2 shadow hover:bg-gray-200"
          onClick={closeModal}
        >
          ✕
        </button>
        <img src={imageSrc} alt="Enlarged project" className="object-contain" />
      </div>
    </div>
  );
};
