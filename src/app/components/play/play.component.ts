import { Component } from '@angular/core';
import { TreeNode } from '../../widgets/tree/model/tree-node';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {
  treeData = {
    id: 1,
    title: 'Root Node',
    children: [],
    edit: false,
    expand: false,
    parent: null,
  } as TreeNode;

  public saveTree(): void {
    console.log('TREE DATA ::: ', this.treeData);
  }
}
