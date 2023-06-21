
const Hero = () => {
  return (
    <div className="w-[100%] bg-black p-7 flex justify-between items-center">
      <div className="w-[100%]">
          <h4 className="font-[italic] font-bold">Chase The New Flavour</h4>
          <img className="mb-8" src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt=""></img>
          <h1 className="text-7xl font-extrabold text-yellow-400 uppercase font-[italic] mb-4">The key To Fine Dining</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.</p>
          <button className="bg-white text-center text-black font-[italic] p-1 rounded-md mt-5 hover:bg-yellow-300">Explore Menu</button>
      </div>
      <div className="w-[100%]">
        <img className="object-cover w-[100%]" src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/welcome.png?raw=true" alt=""></img>
      </div>
    </div>
  )
}

export default Hero