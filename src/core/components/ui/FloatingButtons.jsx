import React from "react";
import { cn } from "../../utils/cn.js";
import Icon from "../ui/AppIcon.jsx"; // using your Icon component

export default function FloatingButtons() {
  const phoneNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("I want to buy the book");

  return (
    <div
      className={cn("fixed bottom-6 right-6 flex flex-col space-y-4 z-50")}
    >
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          "text-white p-4 rounded-full shadow-lg",
          "hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-out",
          "flex items-center justify-center"
        )}
        style={{ background: "var(--gradient-call)" }}
        aria-label="Call us"
      >
        <Icon name="Phone" size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-white p-4 rounded-full shadow-lg",
          "hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-out",
          "flex items-center justify-center"
        )}
        style={{ background: "var(--gradient-whatsapp)" }}
        aria-label="Message on WhatsApp"
      >
        <Icon name="MessageCircle" size={24} />
      </a>
    </div>
  );
}
