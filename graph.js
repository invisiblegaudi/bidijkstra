import { GraphNode } from './types';

// graph structure defined by these fns

const getObj = (items: string = '', obj: any = {}): any => 
  obj instanceof Object ? (Object as any)[items](obj)[0] : [];

const getNode = (node: GraphNode = {}): string => 
  getObj('keys', node) ? getObj('keys', node) : '';

const getChildren = (node: GraphNode = {}): GraphNode[] => 
  getObj('values', node) ? getObj('values', node) : [];

export { getNode, getChildren };
