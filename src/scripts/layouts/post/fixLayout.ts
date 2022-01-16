const FixLayout = () => {
  const kgGalleryCARD = () => {
    const images = document.querySelectorAll(".kg-image-card");

    if (!images) return;

    images.forEach((image, index) => {
      const children = image.childNodes;
      console.log(children);

      if (children.length > 1) return;
      const clazz = ["d-flex", "align-items-center", "justify-content-center"];
      images[index].classList.add(...clazz);
    });
  };

  const init = () => {
    kgGalleryCARD();
  };
  init();
};

FixLayout();

export default {};
