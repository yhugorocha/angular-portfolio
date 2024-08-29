import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

 public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "assets/knowledge/html5.svg",
      alt: "icone de conhecimento de Html5"
    },
    {
      src: "assets/knowledge/css3.svg",
      alt: "icone de conhecimento de CSS3."
    },
    {
      src: "assets/knowledge/angular.svg",
      alt: "icone de conhecimento de Angular."
    },
    {
      src: "assets/knowledge/javascript.svg",
      alt: "icone de conhecimento de JavaScript."
    },
    {
      src: "assets/knowledge/java.svg",
      alt: "icone de conhecimento de Java."
    },
    {
      src: "assets/knowledge/spring.svg",
      alt: "icone de conhecimento de Spring"
    },
    {
      src: "assets/knowledge/docker.svg",
      alt: "icone de conhecimento de Docker"
    }
  ])
}
