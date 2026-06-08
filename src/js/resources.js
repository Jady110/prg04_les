import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Player: new ImageSource('images/standing.webp'),
    Desert: new ImageSource('images/desert.webp'),
    Bubble: new ImageSource('images/bubble.png'),
    Mine: new ImageSource('images/mine.png'),
    Run1: new ImageSource('images/runningOne.webp'),
    Run2: new ImageSource('images/runningTwo.png'),
    Run3: new ImageSource('images/runningThree.webp'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }