import { DeclarationStatement, FunctionDeclaration, Source, Node, ClassDeclaration, FieldDeclaration, ParameterNode, Statement } from "visitor-as/as";
export declare const NEAR_DECORATOR = "nearBindgen";
export declare const PRIVATE_DECORATOR = "contractPrivate";
export declare const WRAPPER_PREFIX = "__wrapper_";
export declare function hasNearDecorator(stmt: Source): boolean;
export declare function isEntry(source: Source | Node): boolean;
export declare function isClass(type: Node): boolean;
export declare function isField(mem: DeclarationStatement): boolean;
export declare function isStatic(mem: DeclarationStatement): boolean;
export declare function isEncodable(mem: DeclarationStatement): boolean;
export declare function isPayable(func: FunctionDeclaration): boolean;
export declare function nearFiles(sources: Source[]): Source[];
export declare function createDecodeStatements(_class: ClassDeclaration): string[];
export declare function createDecodeStatement(field: FieldDeclaration | ParameterNode, setterPrefix?: string): string;
export declare function createEncodeStatements(_class: ClassDeclaration): string[];
export declare function returnsVoid(node: FunctionDeclaration): boolean;
export declare function numOfParameters(node: FunctionDeclaration): number;
export declare function parseTopLevelStatements(sourceCode: string): Statement[];