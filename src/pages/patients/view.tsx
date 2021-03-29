import { List, ListItem, Text } from "components";

const PatientsList = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-20 ">
      <Text size="title">Patinets</Text>
      <Text
        size="header"
        className="w-full flex flex-col items-start mt-10 border-b border-gray-400 pb-6"
      >
        Patinets List
      </Text>
      <List className="mt-8">
        <ListItem className=" h-16 px-4 w-full xl:w-2/3 border border-gray-400 ">
          <div slot="content" className="flex items-center  h-full ">
            <span className="text-indigo-600 font-semibold text-lg">
              Name Lastname
            </span>
            <span className="text-gray-600 pl-8 ">1990-04-05</span>
          </div>
          <div
            slot="action"
            className=" h-full flex items-center cursor-pointer"
          >
            Actions
          </div>
        </ListItem>
      </List>
    </div>
  );
};

export default PatientsList;
