import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import wimetrix from "../../assets/New 1.png";
import shahkam from "../../assets/Frame 1000004227.png";
import { SvgComponent } from "../dashboard/svg";
import Clock from "./clock";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getData } from "../../endpoints/dashboard.endpoints";
import RectangleBox from "./RectangleBox";

const Dashboard = () => {
  const [production, setProduction] = useState<number>(0);
  // const [achievedEfficiency, setAchievedEfficiency] = useState<number>(0);

  const { LineID } = useParams();

  if (!LineID) return <div>Please Provide Line ID</div>;

  const { isLoading, isError, data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getData(LineID),
    refetchInterval: 100000,
  });

  // const AchievedEfficiency = useMemo(() => {
  //   const getHourlyData = data?.find(
  //     (item) => item?.HourID === new Date().getHours()
  //   );
  //   const HourlyTarget = getHourlyData?.HourlyTarget ?? 0;
  //   const ShiftHours = getHourlyData?.HourID ? getHourlyData?.HourID - 8 : 0;
  //   return (production / HourlyTarget) * ShiftHours;
  // }, [LineID, data]);

  const Production = useMemo(() => {
    const Production = data?.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.HourlyProduction,
      0
    );
    return Production;
  }, [LineID, data]);

  useEffect(() => {
    setProduction(Production ?? 0);
    // setAchievedEfficiency(AchievedEfficiency);
  }, [Production]);

  // if (isLoading) return <>Loading ....</>;
  // if (isError) return <>Something Went Wrong</>;

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#2d2a3c",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        color: "white",
      }}
    >
      {/* this is header box */}
      <Box
        sx={{
          flex: 0.5,
          bgcolor: "#1d1d29",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "0px 30px",
        }}
      >
        <img width={"200px"} height={"60px"} src={shahkam} alt="" />
        <img width={"150px"} height={"60px"} src={wimetrix} alt="" />
      </Box>

      {/* this is body box #3f3f7d #5d5da6*/}

      <Box
        sx={{
          bgcolor: "#1a1728",
          flex: 3.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 0.6,
            display: "flex",
            alignItems: "center",
            fontSize: "3rem",
            ml: "30px",
          }}
        >
          {data?.[0]?.LineCode} - Line Production Control Board
        </Box>
        <Box
          sx={{
            // bgcolor:"blue",
            display: "grid",
            p: "0 2rem 0.5rem 2rem",
            flex: 3.4,
            rowGap: "1rem",
            columnGap: "1rem",
            gridTemplateRows: `repeat(3,1fr)`,
            gridTemplateColumns: `repeat(3,1fr)`,

            "@media (max-width: 550px) and (max-height: 930px)": {
              gridTemplateRows: `repeat(2,1fr)`,
              gridTemplateColumns: `repeat(5,1fr)`,
              p: "0 0.5rem 0.5rem 0.5rem",
              rowGap: "0.5rem",
              columnGap: "0.5rem",

            },
          }}
        >
          <Box
            sx={{
              bgcolor: "#22222c",
              borderRadius: "10px",
              gridColumnStart: 3,
              gridColumnEnd: 4,
              gridRowStart: -4,
              gridRowEnd: -1,
              
              "@media (max-width: 550px)": {
                gridColumnStart: 1,
                gridColumnEnd: 6,
                gridRowStart: 3,
                gridRowEnd: 4,
              },
              display: "flex",
              flexDirection: "column",
              background: "linear-gradient( #22222c, #47344a)",
            }}
          >
            <Box
              sx={{
                flex: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* {data?.AchievedEfficiency! < 50 ? (
                <SvgComponent color="red" />
              ) : data?.AchievedEfficiency! > 50 &&
                data?.AchievedEfficiency! <= 90 ? (
                <SvgComponent color="yellow" />
              ) : (
                <SvgComponent color="green" />
              )} */}
              <SvgComponent
                color={
                  data?.[0]?.AchivedTarget !== undefined
                    ? data[0].AchivedTarget < 50
                      ? "red"
                      : data[0].AchivedTarget <= 90
                      ? "yellow"
                      : "green"
                    : "red" // Default color in case AchivedTarget is undefined
                }
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "4rem",
                color: "#bbb8be",
              }}
            >
              {" "}
              <Clock />
            </Box>
          </Box>
          <RectangleBox label="Target" value={data?.[0]?.Target ?? 0} />
          <RectangleBox label="Production" value={production} />
          <RectangleBox
            label="Achieved %"
            value={parseFloat((data?.[0]?.AchivedTarget ?? 0).toFixed(2))}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
