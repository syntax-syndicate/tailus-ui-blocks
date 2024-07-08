import ScrollArea from "./ScrollArea"
import { Text, Title, List, Link } from "@components/typography"

export const Overview = () => (
    <ScrollArea.Root className="h-72 px-4">
      <ScrollArea.Viewport className="w-full">
        <div className="max-w-lg px-10">
          <Title as="div">Tailus Themer</Title>
          <Text className="mt-4">
            Tailwind CSS Styling Library for Building Modern, Consistent and Accessible Web UIs with Radix UI, Melt UI, and Radix Vue.
          </Text>

          <Title as="div" size="base" className="mt-8">
            Concept
          </Title>
          <Text>
            Imagine Tailus Themer as a secret style vault for our UI Kits. It uses Tailwind CSS, making it super easy to customize the look and feel of your components. This means you get a consistent design foundation across all these UI Kits, but with the freedom to tweak things to perfectly match your brand.
          </Text>

          <Title as="div" size="base" className="mt-8">
            Features
          </Title>
          <List className="mt-4 space-y-4">
            <li>
              <Text as="strong">Built-in Palettes: </Text> Hit the ground running with a collection of pre-designed color schemes to jumpstart your project.
            </li>
            <li>
              <Text as="strong">Multi-Themed Apps:</Text> Effortlessly create web applications with multiple themes, offering users a personalized experience.
            </li>
            <li>
              <Text as="strong">Effortless Customization: </Text>Tailor the look and feel to your exact needs. Choose between the intuitive Themer plugin or leverage the power of CSS variables.
            </li>
            <li>
              <Text as="strong">Expanded Component Variants: </Text> Enjoy a wider range of component variations for even greater design flexibility.
            </li>
            <li>
              <Text as="strong">Accessibility First:</Text> Build UIs that are inclusive and user-friendly for everyone.
            </li>
            <li>
              <Text as="strong">Modern & Trendy:</Text> Stay ahead of the curve with Tailus Themer's focus on modern design trends.
            </li>
          </List>

          <Title as="div" size="base" className="mt-8">
            Credits
          </Title>
          <List className="mt-4 space-y-2">
            <li>
              <Link
                href="https://www.tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                href="https://www.radix-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Radix UI
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tailwind-variants.org/docs/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind Variants
              </Link>
            </li>
            <li>
              <Link
                href="https://flowbite.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flowbite Theme
              </Link>
            </li>
            <li>
              Special thanks to{" "}
              <Link
                href="https://twitter.com/tshiokufila"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shekinah Tshiokufila
              </Link>
              {" "}for the continious support and feedback.
            </li>
            <li>
              Special thanks to{" "}
              <Link
                href="https://twitter.com/theo_balick"
                target="_blank"
                rel="noopener noreferrer"
              >
                Théo Balick
              </Link>
              {" "}whose brainstorming sessions and research fueled the creation of Tailus Themer.
            </li>
          </List>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical"/>
      <ScrollArea.Scrollbar orientation="horizontal"/>
    </ScrollArea.Root>
)

const exampleCode = `import ScrollArea from "./ScrollArea"
import { Text, Title, List, Link } from "@components/typography"

export const Overview = () => (
    <ScrollArea.Root className="h-72 px-4">
      <ScrollArea.Viewport className="w-full">
        // content goes here
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical"/>
      <ScrollArea.Scrollbar orientation="horizontal"/>
    </ScrollArea.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang : 'tsx',
    },
]