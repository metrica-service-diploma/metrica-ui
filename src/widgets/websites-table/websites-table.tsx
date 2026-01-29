import { useGetUserWebsitesQuery } from "@/redux/services/api";
import { Table } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const WebsitesTable = () => {
  const websites = useGetUserWebsitesQuery();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Вебсайт</Table.ColumnHeader>
          <Table.ColumnHeader>Визиты</Table.ColumnHeader>
          <Table.ColumnHeader>Просмотры</Table.ColumnHeader>
          <Table.ColumnHeader>Посетители</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {websites.data?.map((website) => (
          <Table.Row key={website.id}>
            <Table.Cell>
              {website.name} -{" "}
              <Link to={`https://${website.domain}`}>{website.domain}</Link>
            </Table.Cell>
            <Table.Cell>Заглушка</Table.Cell>
            <Table.Cell>Заглушка</Table.Cell>
            <Table.Cell>Заглушка</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
