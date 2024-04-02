import { FormGroup } from "@angular/forms";

export interface TreeNode {
    id: number,
    title: string,
    children: TreeNode[],
    edit: boolean,
    expand: boolean,
    parent: any;
    form?: FormGroup
}