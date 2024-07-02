"use client";

import { useEffect, useMemo, useState } from "react";
import { Select, Flex, Typography, Skeleton, Layout } from "antd";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useSelectedPond } from "@/context/SelectedPondContext";
import { RoutePaths } from "@/routes/routePaths";
import { POND_DATA } from "@/data/pond";

const { Header: AntdHeader } = Layout;

const Header: React.FC = function() {
  const path = usePathname();
  const { selectedPond, onPondChange } = useSelectedPond()

  const [isShowSelectedPond, setIsShowSelectedPond] = useState<boolean>(false);

  const pondSelectionPaths = [
    RoutePaths.cycle.string(),
  ];

  const pondListMemo = useMemo(() => {
    const pondData: PondType[] = POND_DATA;

    let allPondOption = [
      {
        value: pondData?.map((pond) => pond.id).toString(),
        label: "Semua",
      },
    ];

    pondData?.forEach((pond) => {
      allPondOption.push({
        value: pond.id.toString(),
        label: pond.name,
      });
    });

    return pondData ? allPondOption : [];
  }, [POND_DATA]);

  const handleShowSelectedPond = () => {
    if (pondSelectionPaths.includes(path)) {
      setIsShowSelectedPond(true);

      const currentSelectedPond = Cookies.get("key");

      if (currentSelectedPond) {
        // auto select pond based on the cookie
        handleSelectedPond(currentSelectedPond)
      } else {
        // set the first array ("Semua")
        handleSelectedPond(pondListMemo[0]?.value ?? "")
      }
    } else {
      setIsShowSelectedPond(false);
    }
  };

  const handleSelectedPond = (value: string) => {
    onPondChange(value);

    // set selected pond to cookie
    Cookies.set("key", value);
  };

  useEffect(() => {
    handleShowSelectedPond();
  }, [path, pondListMemo]);

  return (
    <AntdHeader className="sticky top-0 z-50 flex items-center justify-end bg-white shadow-default">
      <Flex align="center" gap={8}>
        {isShowSelectedPond && (
          <>
            <Typography.Text strong>Kolam:</Typography.Text>

            {/* {allPondQuery.isLoading ? (
              <Skeleton.Input
                active
                style={{
                  width: 200,
                  display: "flex",
                }}
              />
            ) : ( */}
              <Select
                value={selectedPond}
                placeholder="Kolam"
                style={{ width: 235 }}
                onChange={handleSelectedPond}
                options={pondListMemo}
                variant="filled"
              />
            {/* )} */}
          </>
        )}
      </Flex>
    </AntdHeader>
  );
}

export default Header;
