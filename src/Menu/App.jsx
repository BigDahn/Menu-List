import { useState } from 'react'
import items from './data'
import Menu from './Menu'
import Categories from './Categories'
const newCatergory = ["all", ... new Set(items.map((item)=>item.category))]
const App = () => {
  const [menu, setMenu] = useState(items)
  const [category, setCategory] = useState(newCatergory)

  const filterItems = (category)=>{
    if (category === "all") {
      setMenu(items)
      return;
    }
    const FilteredCategory = items.filter((item)=>item.category === category)
    setMenu(FilteredCategory)
  }
  
  return (
    <main>
      <section className="grid justify-center align-element m-auto  ">
        <div className=" text-4xl font-medium mt-10 mb-10 justify-center m-auto  ">
          <h2>Our Menu</h2>
          <div className="border-b-4 border-b-[#f59e0b] pt-4 w-24 ml-10 "></div>
        </div>
        <Categories newCatergory={category} filterItems={filterItems}/>
        <Menu items={menu} />
      </section>
    </main>
  )
}

export default App
