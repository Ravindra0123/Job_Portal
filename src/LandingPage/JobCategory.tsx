import { Carousel } from "@mantine/carousel";
import { jobCategory } from "./DATA";

const JobCategory=()=>{
    return <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job</span> Category</div>
            <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">Explore diverse job oppuratunites tailored to your skills.Start Your Career Journey Today!</div>
            <Carousel slideSize="22%" slideGap="md" loop>
      {
            jobCategory.map((category, index)=><Carousel.Slide>

            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400">
                <div className="p-2 bg-bright-sun-300 rounded-full">
                    <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name}/>
                </div>
                <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
                <div className="text-mine-shaft-300 text-center text-sm">{category.desc}</div>
                <div className="text-bright-sun-300 text-lg">{category.jobs}</div>
            </div>

            </Carousel.Slide>)
        }
    </Carousel>
           
    </div>

}
export default JobCategory;