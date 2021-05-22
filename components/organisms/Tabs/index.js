import { TabButtons, TabButton } from 'components/organisms/Tabs/styles';

const Tab = ({children, selected, tabs}) => {

  return (
    <>
      <TabButtons>
        {tabs.map(tab => (
          <TabButton 
            key={tab.label}
            selected={selected === tab.label}
          >
            { tab.label }
          </TabButton>
        ))}
      </TabButtons>
      {children}
    </>
  )
};

export default Tab;