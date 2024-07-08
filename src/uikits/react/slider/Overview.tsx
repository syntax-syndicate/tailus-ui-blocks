import Slider from "@react-ui/slider/Slider";

export const Overview = () => (
    <Slider.Root
        className="w-72"
        defaultValue={[50]}
        max={100}
        step={1}
    >
        <Slider.Track>
            <Slider.Range />
        </Slider.Track>
        <Slider.Thumb aria-label="Volume"/>
    </Slider.Root>
)