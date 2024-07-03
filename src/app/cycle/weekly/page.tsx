"use client";

import {
  Breadcrumb,
  Button,
  Select,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { confirm } from "@/components/modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Option } from "@/components/select";
import Link from "next/link";
import { RoutePaths } from "@/routes/routePaths";
import { useSelectedPond } from "@/context/SelectedPondContext";
import { CYCLE_WEEKLY_DATA } from "@/data/cycleweekly";
import CycleWeeklyDetail from "./_detail";

const showDeleteConfirm = (id: number, age: number) => {
  confirm({
    title: "Hapus kolam?",
    okType: "danger",
    content: (
      <p>
        Apakah anda yakin akan menghapus data pekan ke-
        <span className="font-semibold">{age}</span>?
      </p>
    ),
    onOk() {
      console.log(id);
    },
  });
};

const CycleWeekly = () => {
  const { selectedPond } = useSelectedPond();

  const columns: TableColumnsType<CycleWeeklyType> = [
    {
      title: "Pekan / Umur",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Berat Ikan (gr)",
      dataIndex: "fishWeight",
      key: "fishWeight",
    },
    {
      title: "Sisa Ikan Hidup",
      dataIndex: "remainingFish",
      key: "remainingFish",
    },
    {
      title: "Total Bobot Ikan (kg)",
      dataIndex: "totalFishWeight",
      key: "totalFishWeight",
      render: (_, record) => record.totalFishWeight / 1000,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <CycleWeeklyDetail
            data={CYCLE_WEEKLY_DATA.find((item) => item.id === record.id)}
          />
          <Link href={RoutePaths.cycleWeeklyEdit.fmt(record.id)}>
            <EditOutlined />
          </Link>
          <Link
            onClick={() => showDeleteConfirm(record.id, record.age)}
            href="#"
          >
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          {
            title: <Link href={RoutePaths.home.string()}>Home</Link>,
          },
          {
            title: <Link href={RoutePaths.cycle.string()}>Siklus Panen</Link>,
          },
          {
            title: "Siklus Pekanan",
          },
        ]}
      />

      <div className="mb-3 mt-4 flex w-full justify-end">
        <div className="mr-auto">
          {/* <span>Pilih Siklus: </span> */}
          <Select
            // value={orderType}
            placeholder="Pilih Siklus"
            // onChange={handleSetType}
          >
            <Option value="">Semua</Option>
            {CYCLE_WEEKLY_DATA.map((data) => (
              <Option key={data.cycleId} value={data.cycleId}>
                {data.cycleId}
              </Option>
            ))}
          </Select>
        </div>
        <Link href={RoutePaths.cycleWeeklyAdd.string()}>
          <Button type="default">Tambah</Button>
        </Link>
      </div>

      <Table
        columns={columns}
        dataSource={CYCLE_WEEKLY_DATA}
        className="overflow-auto"
      />
    </div>
  );
};

export default CycleWeekly;