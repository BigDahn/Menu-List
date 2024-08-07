

const categories = ({ newCatergory, filterItems }) => {
  return (
    <div className="flex justify-center m-auto align-element">
      {newCatergory.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className=" border  rounded-md  mb-10 ml-4 bg-[#f59e0b] text-white pl-4 pr-4 pb-1 pt-1 capitalize"
            onClick={()=> filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default categories
