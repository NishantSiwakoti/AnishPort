import {
  VideoCameraIcon,
  SpeakerphoneIcon,
  AdjustmentsIcon,
  SparklesIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useEffect } from "react";

const services = [
  { name: "Video Editing", icon: VideoCameraIcon },
  { name: "Audio Editing", icon: SpeakerphoneIcon },
  { name: "Content Optimization", icon: AdjustmentsIcon },
  { name: "Special Effects and Motion Graphics", icon: SparklesIcon },
  { name: "Social Media Clips", icon: ShareIcon },
];

const Services = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    document.title = `${title} | Eanish`;
  });
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-[#2358aa] mb-8">
        My Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center justify-center p-6 bg-[#2358aa] text-white rounded-lg shadow-md hover:scale-110 transition-transform duration-300 ease-in-out m-4 h-64"
          >
            <service.icon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-center">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
