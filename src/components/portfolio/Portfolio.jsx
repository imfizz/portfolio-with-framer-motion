import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/19220583/pexels-photo-19220583/free-photo-of-balconies-of-a-apartment-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nobis, illo, consequuntur id delectus numquam illum laboriosam animi accusantium sunt quasi voluptatem sit similique. Iure provident quam dolorem quae excepturi!"
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/20419403/pexels-photo-20419403/free-photo-of-ollantaytambo-cusco-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nobis, illo, consequuntur id delectus numquam illum laboriosam animi accusantium sunt quasi voluptatem sit similique. Iure provident quam dolorem quae excepturi!"
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/20411329/pexels-photo-20411329/free-photo-of-a-plate-of-strawberries-and-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nobis, illo, consequuntur id delectus numquam illum laboriosam animi accusantium sunt quasi voluptatem sit similique. Iure provident quam dolorem quae excepturi!"
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/20265011/pexels-photo-20265011/free-photo-of-a-woman-sitting-on-top-of-a-pile-of-rubble-with-a-construction-site-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nobis, illo, consequuntur id delectus numquam illum laboriosam animi accusantium sunt quasi voluptatem sit similique. Iure provident quam dolorem quae excepturi!"
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="project image" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Portfolio