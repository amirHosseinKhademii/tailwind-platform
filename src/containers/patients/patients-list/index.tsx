import { List, ListItem, Text } from "components";
import { ICDelete, ICEdit } from "icons";
import { Fragment } from "react";
import { useHistory } from "react-router";

export const PatientsList = () => {
  const { push } = useHistory();
  return (
    <Fragment>
      <Text
        size="header"
        className="w-full flex flex-col items-start mt-10 border-b border-gray-400 pb-6"
      >
        Patinets List
      </Text>
      <List className="mt-8 px-0 lg:px-80">
        {Array.from(new Array(10)).map((item, index) => (
          <ListItem
            key={index}
            className=" h-16 px-4 w-full border border-gray-400 bg-gray-200 mb-4 hover:bg-gray-300  "
          >
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
              <ICEdit
                className="text-gray-600 w-5 h-5 mr-4"
                onClick={() => push("/admin/patients/add")}
              />
              <ICDelete className="text-red-500 w-5 h-5" />
            </div>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};
