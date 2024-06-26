const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Clinical Notes Made Easy",
    price: "OrbVoice understands complex medical terms, adjusting to your specialty and dictation style. Whether in primary care, surgery, psychiatry, or any medical field, OrbVoice ensures accuracy and efficiency. Record during patient encounters, review instantly, and seamlessly export notes to your EHR.",
    colors: [
      {
        code: "black",
        img: "1st.png",
      },
    ],
  },
  {
    id: 2,
    title: "Clinical Notes Made Easy",
    price: "OrbVoice understands complex medical terms, adjusting to your specialty and dictation style. Whether in primary care, surgery, psychiatry, or any medical field, OrbVoice ensures accuracy and efficiency. Record during patient encounters, review instantly, and seamlessly export notes to your EHR.",
    colors: [
      {
        code: "lightgray",
        img: "2nd.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Clinical Notes Made Easy",
    price: "OrbVoice understands complex medical terms, adjusting to your specialty and dictation style. Whether in primary care, surgery, psychiatry, or any medical field, OrbVoice ensures accuracy and efficiency. Record during patient encounters, review instantly, and seamlessly export notes to your EHR.",
    colors: [
      {
        code: "lightgray",
        img: "3rd.png",
      },
    ],
  },
  {
    id: 4,
    title: "Clinical Notes Made Easy",
    price: "OrbVoice understands complex medical terms, adjusting to your specialty and dictation style. Whether in primary care, surgery, psychiatry, or any medical field, OrbVoice ensures accuracy and efficiency. Record during patient encounters, review instantly, and seamlessly export notes to your EHR.",
    colors: [
      {
        code: "black",
        img: "4th.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Clinical Notes Made Easy",
    price: "OrbVoice understands complex medical terms, adjusting to your specialty and dictation style. Whether in primary care, surgery, psychiatry, or any medical field, OrbVoice ensures accuracy and efficiency. Record during patient encounters, review instantly, and seamlessly export notes to your EHR.",
    colors: [
      {
        code: "gray",
        img: "5th.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
