import { Descriptions, DescriptionsProps } from "antd";
import { useState } from "react";
import { Modal } from "@/components/modal";
import formatRupiah from "@/libs/formatRupiah";
import { InfoCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const CycleWeeklyDetail = ({ data }: { data?: CycleWeeklyType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: DescriptionsProps['items'] = [
    {
      key: "1",
      label: "Umur",
      children: <p>{data?.age} Pekan</p>,
    },
    {
      key: "2",
      label: "Berat Ikan",
      children: <p>{data?.fishWeight} gr</p>,
    },
    {
      key: "3",
      label: "Sisa Ikan Hidup",
      children: <p>{data?.remainingFish} ikan</p>,
    },
    {
      key: "4",
      label: "Kematian per Pekan",
      children: <p>{data?.totalDeath} ikan</p>,
    },
    {
      key: "5",
      label: "Total Berat Ikan",
      children: <p>{(data?.totalFishWeight || 0)/1000} kg</p>,
    },
    {
      key: "6",
      label: "Total Konsumsi Pakan",
      children: <p>{(data?.totalFeedDaily || 0)/1000} kg / hari</p>,
    },
    {
      key: "7",
      label: "Biaya Pakan Pekan ini",
      children: <p>{formatRupiah(data?.totalFeedPrice)}</p>,
    },
    {
      key: "8",
      label: "Status Panen",
      children: <p>{data?.isHarvested ? "Panen" : "Belum panen"}</p>,
    },
  ];

  return (
    <>
      <Link onClick={() => showModal()} href="#">
        <InfoCircleOutlined />
      </Link>
      <Modal
        title="Detail Siklus"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Descriptions size="small" items={items} />
      </Modal>
    </>
  );
};

export default CycleWeeklyDetail;
