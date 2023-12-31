export default function BlockGuide() {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: "精選酒店推介",
      text: `幫你搜羅至 hit 心水酒店`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: "即時價格資訊",
      text: `幫你比較多間酒店價錢`,
      delayAnim: "50",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: "酒店評論",
      text: `幫你蒐集多間酒店真實住後評價`,
      delayAnim: "100",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}