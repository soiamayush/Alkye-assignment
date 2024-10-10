import React, { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import icon from "../../public/icon/logo-white.svg";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Index = () => {
  const [photographyArticles, setPhotographyArticles] = useState([]);
  const [learningArticles, setLearningArticles] = useState([]);
  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    draggable: true,
  });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    draggable: true,
  });
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  useEffect(() => {
    const onSelect1 = () => {
      if (emblaApi1) {
        setActiveIndex1(emblaApi1.selectedScrollSnap());
      }
    };
    const onSelect2 = () => {
      if (emblaApi2) {
        setActiveIndex2(emblaApi2.selectedScrollSnap());
      }
    };
    emblaApi1 && emblaApi1.on("select", onSelect1);
    emblaApi2 && emblaApi2.on("select", onSelect2);
    return () => {
      emblaApi1 && emblaApi1.off("select", onSelect1);
      emblaApi2 && emblaApi2.off("select", onSelect2);
    };
  }, [emblaApi1, emblaApi2]);
  const navigate = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      const token = sessionStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication token not found. Please log in again.");
        navigate.push("/");
        return;
      }
      try {
        const response = await fetch(
          "https://untitled-twkmuar27a-uc.a.run.app/api/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const articles = await response.json();
          setPhotographyArticles(
            articles.filter((article) => article.prompt === "Photography")
          );
          setLearningArticles(
            articles.filter((article) => article.prompt === "Learning")
          );
        } else {
          toast.error("Failed to fetch articles, status: " + response.status);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        toast.error("Error during fetching articles");
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-black py-10 md:py-24 pl-8  md:pl-36">
      <div className="flex flex-col gap-12 md:gap-20">
        <Image
          src={icon}
          alt="Icon"
          onClick={() => navigate.push("/")}
          className="h-auto w-16 md:w-36 cursor-pointer"
        />
        <div className="flex flex-col gap-4 md:gap-6 text-white">
          <span className="text-2xl md:text-5xl font-medium">Welcome Test</span>
          <span className="text-sm md:text-2xl font-semibold">
            Hope you having a good day!
          </span>
        </div>
        {/* Photography Carousel */}
        <div className="flex flex-col gap-10">
          <span className="font-medium text-2xl text-white md:text-5xl">
            Photography
          </span>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef1}>
              <div className="embla__container">
                {photographyArticles.map((article, index) => (
                  <div className="embla__slide-more embla__slide" key={index}>
                    <Image
                      src={article.image_url}
                      alt={`Photography ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-[20px] md:rounded-[40px] cursor-grab"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dots flex justify-end mx-6 mt-4">
              {photographyArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi1 && emblaApi1.scrollTo(index)}
                  className={`dot ${
                    activeIndex1 === index ? "bg-white" : "bg-gray-600"
                  } h-3 w-3 rounded-full mx-1`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Learning Carousel */}
        <div className="flex flex-col gap-10">
          <span className="font-medium text-2xl text-white md:text-5xl">
            Learning
          </span>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef2}>
              <div className="embla__container">
                {learningArticles.map((article, index) => (
                  <div className="embla__slide-less embla__slide" key={index}>
                    <Image
                      src={article.image_url}
                      alt={`Learning ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-[20px] md:rounded-[40px] cursor-grab"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dots flex justify-end mx-6 mt-4">
              {learningArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi2 && emblaApi2.scrollTo(index)}
                  className={`dot ${
                    activeIndex2 === index ? "bg-white" : "bg-gray-600"
                  } h-3 w-3 rounded-full mx-1`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
