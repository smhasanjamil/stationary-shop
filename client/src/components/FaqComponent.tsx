import { useRef, useState } from "react";

// Type for each FAQ item
type FaqItem = {
  q: string; // Question
  a: string; // Answer
};

// Type for the props of the FaqsCard component
type FaqsCardProps = {
  faqsList: FaqItem;
  idx: number;
};

const FaqsCard = ({ faqsList, idx }: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  // const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    const el = answerElRef.current?.children[0] as HTMLElement | undefined;
    if (!el) return;
    const answerElH = el.offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqComponent = () => {
  const faqsList = [
    {
      q: "What products do you offer at your stationery shop?",
      a: "We offer a wide range of products including notebooks, pens, office supplies, art materials, filing systems, and more. Everything you need for your office or school can be found here!",
    },
    {
      q: "Do you offer bulk discounts for businesses or schools?",
      a: "Yes, we provide bulk discounts for businesses, schools, and educational institutions. Feel free to contact us with your order details, and we’ll offer a competitive price.",
    },
    {
      q: "Is there an option for home delivery?",
      a: "Absolutely! We offer home delivery for all our products. Simply place an order online or call our customer service, and we will deliver your items directly to your doorstep.",
    },
    {
      q: "Are your products eco-friendly?",
      a: "Yes, we carry a variety of eco-friendly products, including recycled paper, biodegradable pens, and sustainable notebooks. We're committed to offering greener alternatives for our customers.",
    },
    {
      q: "Do you have a return policy for your products?",
      a: "We have a flexible return policy. If you are not satisfied with your purchase, you can return the product within 30 days of purchase, provided it is unused and in its original packaging.",
    },
  ];
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqComponent;
