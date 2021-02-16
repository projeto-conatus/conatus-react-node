import React from "react";

const ScrollToTopButton = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return function removeListener() {
      window.removeEventListener('scroll', checkScroll);
    }
  });

  const checkScroll = () => {
    if (!showButton && window.pageYOffset > 400)
      setShowButton(true);
    else if(showButton && window.pageYOffset <= 400)
      setShowButton(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <a
      href="//"
      className={props.name}
      title="Clique para voltar ao topo do site"
      onClick={ scrollToTop }
      style={{display: showButton ? 'flex' : 'none'}}
    >
      <i className="fas fa-arrow-circle-up "></i>
      <span>Topo</span>
    </a>
  );
};

export default ScrollToTopButton;
