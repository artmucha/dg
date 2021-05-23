import { TabButtons, TabButton } from 'components/organisms/Tabs/styles';

const Tab = ({children, selected, setSelected, tabs}) => (
  <>
    <TabButtons>
      {tabs.map(tab => (
        <TabButton 
          key={tab.label}
          selected={selected === tab.label}
          onClick={() => setSelected(tab.label)}
        >
          { tab.text }
        </TabButton>
      ))}
    </TabButtons>
    {children}
  </>
);

export default Tab;