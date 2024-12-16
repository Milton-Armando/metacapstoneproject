import React from 'react';

function ServiceCard({ title, imageSrc, altText, description, linkText, first, second, third }) {
  return (
    <div className="service">
      <h3>{title}</h3>
      <img src={imageSrc} alt={altText} />
      <p>{description}</p>
      {linkText && <a href="#">{linkText}</a>}
      <p>
        {first && <span>{first}<br /></span>}
        {second && <span>{second}<br /></span>}
        {third && <span>{third}</span>}
      </p>
    </div>
  );
}

export default ServiceCard;
