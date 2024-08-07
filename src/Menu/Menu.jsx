
const Menu = ({items}) => {
  return (
    <>
      <div className=" grid sm:grid-cols-3 gap-8 align-element w-[90vw] ">
        {items.map((item) => {
          const { title, price, img, desc } = item
          return (
            <div key={item.id} className="   max-w-[400px]    shadow  ">
              <img
                src={img}
                alt=""
                width="100%"
                height="900px"
                className="object-cover block max-h-[200px] rounded"
              />
              <div className="flex justify-between ml-6 mr-6 mt-6">
                <h1 className="text-xl capitalize font-bold">{title}</h1>
                <h4 className="border pl-4 pr-4 rounded bg-[#f59e0b] text-white">
                  ${price}
                </h4>
              </div>
              <p className="pr-6 pl-6 mt-6 mb-10 leading-loose">{desc}</p>
            </div>
          )
        })}
      </div>
    </>
  )
  
}

export default Menu 
