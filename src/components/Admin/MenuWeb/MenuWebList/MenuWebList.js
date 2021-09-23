import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Button,
  Modal as ModalAntd,
  notification
} from "antd";
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";
import { updateMenuApi, activateMenuApi, deleteMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import AddMenuWebForm from "../AddMenuWebForm";
import EditMenuWebForm from "../EditMenuWebForm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./MenuWebList.scss";

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
  const { menu, setReloadMenu } = props;
  const [listItems, setListItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listItemsArray = [];
    menu.forEach((item) => {
      listItemsArray.push({
        content: (
          <MenuItem
            item={item}
            activateMenu={activateMenu}
            editMenuWebModal={editMenuWebModal}
            deleteMenu={deleteMenu}
          />
        ),
      });
    });
    setListItems(listItemsArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  const activateMenu = (menu, status) => {
    const accessToken = getAccessTokenApi();
    activateMenuApi(accessToken, menu._id, status).then((response) => {
      notification["success"]({
        message: response,
      });
    });
  };

  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;
      updateMenuApi(accessToken, _id, { order });
    });
  };

  const addMenuModal = () => {
    setModalVisible(true);
    setModalTitle("Creando nuevo Menú");
    setModalContent(
      <AddMenuWebForm
        setModalVisible={setModalVisible}
        setReloadMenu={setReloadMenu}
      />
    );
  };

  const editMenuWebModal = (menu) => {
    setModalVisible(true);
    setModalTitle(`Editando menú: ${menu.title}`);
    setModalContent(
      <EditMenuWebForm
        setModalVisible={setModalVisible}
        setReloadMenu={setReloadMenu}
        menu={menu}
      />
    );
  };

  const deleteMenu=(menu)=>{
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando Menú",
      content: `Esta seguro que quiere eliminar menú ${menu.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteMenuApi(accessToken, menu._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadMenu(true);
          })
          .catch((error) => {
            notification["error"]({
              message: error,
            });
          });
      },
    });
  }

  return (
    <div className="menu-web-list">
      <div className="menu-web-list_header">
        <Button type="primary" onClickCapture={addMenuModal}>
          Agregar Menú
        </Button>
      </div>
      <div className="menu-web-list_items">
        <DragSortableList
          items={listItems}
          onSort={onSort}
          type="vertical"
        />
      </div>
      <Modal
        title={modalTitle}
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function MenuItem(props) {
  const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

  return (
      <List.Item
        /*style={{
          backgroundColor: item.order / 2 === 0 ? "#e1e1e1" : "#e7e7e7e",
        }}*/

        actions={[
          <Switch
            defaultChecked={item.active}
            onChange={(e) => activateMenu(item, e)}
          />,
          <Button type="primary" onClickCapture={(e) => editMenuWebModal(item)}>
            <EditOutlined />
          </Button>,
          <Button
            type="danger"
            onClickCapture={() => deleteMenu(item)}
            className="lastBtn"
          >
            <DeleteOutlined />
          </Button>,
        ]}
      >
        <List.Item.Meta
          title={item.title}
          description={item.url}
        />
      </List.Item>
  );
}
