import Select from "./Select";

const countries = [
  { flag: "🇨🇩", name: "DR Congo" },
  { flag: "🇨🇬", name: "Congo Braza" },
  { flag: "🇦🇴", name: "Angola" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇪🇸", name: "Spain" },
];

export const Overview = () => (
    <Select.Root defaultValue="DR Congo">
        <Select.Trigger className="w-56">
            <Select.Value placeholder="Role" />
            <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
            <Select.Content mixed className="z-50">
                <Select.Viewport>
                    {
                        countries.map((country) => (
                            <SelectItem entry={country} key={country.name} />
                        ))
                    }
                </Select.Viewport>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
)

type Entry = {
    flag: string;
    name: string;
}

const SelectItem = ({ entry }: { entry: Entry }) => {
  return (
    <Select.Item value={entry.name} className="pl-7 items-center">
      <Select.ItemIndicator />
      <Select.ItemText>
        <span role="img" aria-label={entry.name} className="mr-2">
          {entry.flag}
        </span>
        {entry.name}
      </Select.ItemText>
    </Select.Item>
  );
};

const exampleCode = `import Select from "@tailus-ui/Select";

const countries = [
  { flag: "🇨🇩", name: "DR Congo" },
  { flag: "🇨🇬", name: "Congo Braza" },
  { flag: "🇦🇴", name: "Angola" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇪🇸", name: "Spain" },
];

export const Overview = () => (
    <Select.Root defaultValue="DR Congo">
        <Select.Trigger size="md" className="w-56">
            <Select.Value placeholder="Role" />
            <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
            <Select.Content mixed className="z-50">
                <Select.Viewport>
                    {
                        countries.map((country) => (
                            <SelectItem entry={country} key={country.name} />
                        ))
                    }
                </Select.Viewport>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
)

type Entry = {
    flag: string;
    name: string;
}

const SelectItem = ({ entry }: { entry: Entry }) => {
  return (
    <Select.Item value={entry.name} className="pl-7 items-center">
      <Select.ItemIndicator />
      <Select.ItemText>
        <span role="img" aria-label={entry.name} className="mr-2">
          {entry.flag}
        </span>
        {entry.name}
      </Select.ItemText>
    </Select.Item>
  );
};`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]