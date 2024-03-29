import React, {FC} from 'react';
import {Point, PolygonFeatures} from './DailyDealsBackgroundShape.tsx';
import Svg, {Polygon} from 'react-native-svg';

const svgVertex = (point: Point) => `${point.x},${point.y}`;

type Props = {
  polygonFeatures: PolygonFeatures;
  shapeColor: string;
};

export const DailyDealsShapeSvg: FC<Props> = ({
  polygonFeatures,
  shapeColor,
}) => {
  const {
    vertices: {topLeft, topRight, bottomLeft, bottomRight},
    size,
  } = polygonFeatures;

  const topVertices = `${svgVertex(topLeft)} ${svgVertex(topRight)}`;
  const bottomVertices = `${svgVertex(bottomRight)} ${svgVertex(bottomLeft)}`;
  const vertices = `${topVertices} ${bottomVertices}`;

  return (
    polygonFeatures && (
      <Svg height={size.height} width={size.width}>
        <Polygon points={vertices} fill={shapeColor} />
      </Svg>
    )
  );
};
