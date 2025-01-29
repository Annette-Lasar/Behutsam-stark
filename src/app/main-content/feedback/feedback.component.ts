import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'best-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  testimonials = [
    {
      text: 'Ich habe mich seit Jahren wie eine Gefangene meiner eigenen Gedanken gefühlt - ständig überfordert, ständig unter Druck. Das Coaching mit Katja hat mir geholfen, die Dinge in meinem Tempo anzugehen. Jetzt habe ich Werkzeuge an der Hand, mit denen ich in stressigen Momenten ruhig bleiben kann. Besonders beeindruckt hat mich, wie feinfühlig und verständnisvoll sie auf meine Hochsensibilität eingegangen ist. Ich fühle mich nicht mehr allein mit meinen Herausforderungen, sondern sehe sie jetzt als etwas, das ich mit der richtigen Unterstützung bewältigen kann. Dafür bin ich unglaublich dankbar.',
      author: 'Anna M.',
    },
    {
      text: '„Mit meinem ADHS hatte ich immer das Gefühl, von der Gesellschaft missverstanden zu werden. Durch die Arbeit mit Katja fühlte ich mich das erste Mal wirklich verstanden. Sie hat mir beigebracht, wie ich meine Energie besser lenken und meine Stärken nutzen kann, ohne mich ständig schuldig zu fühlen. Ihre traumasensible Herangehensweise hat mich ermutigt, mich mit schwierigen Erlebnissen aus der Vergangenheit auseinanderzusetzen. Heute fühle ich mich viel ausgeglichener und bin stolz auf meine Fortschritte. Dieses Coaching hat mir wirklich neue Perspektiven eröffnet.',
      author: 'Peter K.',
    },
    {
      text: 'Bis zu diesem Coaching mit Katja wusste nicht, dass mein inneres Chaos auf eine Hochbegabung zurückzuführen war. Katja hat mir geholfen, diese Verbindung zu verstehen und sie als Stärke zu sehen, anstatt mich von ihr überwältigen zu lassen. Besonders schätze ich ihren Ansatz, der mich nicht verändern, sondern mich dabei unterstützen soll, mit meinem Wesen im Einklang zu leben. Wir haben Wege gefunden, wie ich in stressigen Momenten innehalten und meine Gedanken sortieren kann. Katja hat mir geholfen, mehr auf mich zu achten. Ich hätte nie gedacht, dass ich mich einmal so stabil und zuversichtlich fühlen könnte.',
      author: 'Lisa S.',
    },
  ];

  currentIndex = 0;

  prev() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.testimonials.length - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.testimonials.length - 1
        ? this.currentIndex + 1
        : 0;
  }
}
