import { routesList } from "@/constants/routes";
import {
  dashboardSettingsSelector,
  setDashboardSettings,
} from "@/redux/modules/dashboard";
import { useGetUserWebsitesQuery } from "@/redux/services/api";
import { useAppDispatch } from "@/redux/store";
import { Table, Link as ChakraLink } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

export const WebsitesTable = () => {
  const dispatch = useAppDispatch();
  const websites = useGetUserWebsitesQuery();
  const dashboardSettings = useSelector(dashboardSettingsSelector);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Название</Table.ColumnHeader>
          <Table.ColumnHeader>Домен</Table.ColumnHeader>
          <Table.ColumnHeader>Код доступа</Table.ColumnHeader>
          <Table.ColumnHeader>Дата создания</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {websites.data?.map((website) => (
          <Table.Row key={website.id}>
            <Table.Cell>
              <ChakraLink asChild color="blue.500">
                <RouterLink
                  to={routesList.Dashboard}
                  onClick={() => {
                    dispatch(
                      setDashboardSettings({
                        ...dashboardSettings,
                        trackingCode: website.trackingCode,
                      }),
                    );
                  }}
                >
                  {website.name}
                </RouterLink>
              </ChakraLink>
            </Table.Cell>
            <Table.Cell>
              <RouterLink
                style={{ textDecoration: "underline" }}
                to={`https://${website.domain}`}
              >
                {website.domain}
              </RouterLink>
            </Table.Cell>
            <Table.Cell>{website.trackingCode}</Table.Cell>
            <Table.Cell>
              {new Date(website.createdAt).toLocaleString("ru-RU", {
                dateStyle: "medium",
              })}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
