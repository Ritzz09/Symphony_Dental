import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Faq.css";

const faqs = [
    {  question: "Are General Dentistry procedures painful?", answer: "Modern dentistry offers various pain management options, including local anesthesia and sedation dentistry, to ensure your comfort during procedures." },
    {  question: "How common is dental anxiety?", answer: "Dental anxiety is quite common, affecting millions of people. Symphony Dental Care offers a warm and welcoming environment where patients can feel comfortable and supported throughout their dental visits, ensuring that their concerns are addressed and that they receive the care they need without feeling overwhelmed." },
    {  question: "Will I need to have someone drive me home following General Dentistry?", answer: "For treatments done under local anesthesia, it is generally safe to drive home afterward." },
    {  question: "How much does Dental treatments cost?", answer: "The cost of dental treatment procedures varies depending on the specific service required. We offer flexible payment options and can provide a personalized estimate during your consultation." },
    {  question: "What are Veneers?", answer: "Porcelain veneers are custom-made, contact lens-style thin shells made of ceramic material, meticulously handcrafted by a skilled technician. These veneers are designed to match the color and shape of natural teeth, and they are bonded to the front surface of the existing teeth to enhance the smile's appearance. They can effectively conceal stains, facilitate smile makeovers, and close gaps between teeth." },
    {  question: "How long does Teeth whitening typically last?", answer: "The majority of whitening treatments typically last between six months to a year, provided you avoid consuming sodas, carbonated beverages, coffee, or foods that can discolor your teeth. Touch-ups are generally needed after around a one-year mark." },
    {  question: "What should I do with my bleeding gums?", answer: "Bleeding and swollen gums indicate the presence of gum disease. While this condition may not cause discomfort for many individuals, we recommend seeing a dentist promptly for a diagnosis. Early intervention can help prevent any worsening of the condition." },
    {  question: "When should a child be taken to the dentist for their first checkup?", answer: "To promote good dental health, it's best for your child to visit a dentist as soon as their first tooth emerges, or by their first birthday at the latest. This early visit helps set the foundation for a lifetime of healthy smiles!" },
    {  question: "Do you have Car Parking?", answer: "There is free street parking subject to availability." }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id= "faq" className="faq-section">
      <div className="container">
      <div className="section-title1">
                <h2> Your Dental Questions, Answered</h2>
                <p style={{ textAlign: 'center'}}>
                Find Clear and Helpful Information About Your Dental Care
                </p>
            </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
