import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  step1Classes;
  step2Classes;
  step3Classes;
  step4Classes;

  constructor(
    private storage: StorageService
  ) { }

  checkSectionValidity(sectionName: string, classList) {
    if (this.storage.retrieveSectionValue(sectionName, 'sectionValid') === true) {
      classList.add('progress__valid-step');
    } else {
      classList.remove('progress__valid-step');
    }
  }

  ngOnInit() {
    const progressSteps = document.querySelectorAll('.progress__step');
    this.step1Classes = progressSteps[0].classList;
    this.step2Classes = progressSteps[1].classList;
    this.step3Classes = progressSteps[2].classList;
    this.step4Classes = progressSteps[3].classList;
    window.addEventListener('scroll', this.scroll, true);

    this.checkSectionValidity('personalSectionValues', this.step1Classes);
    this.checkSectionValidity('claimSectionValues', this.step2Classes);
    this.checkSectionValidity('claimDetailSectionValues', this.step3Classes);
    this.checkSectionValidity('confirmationSectionValues', this.step4Classes);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (e): void => {
    const scrollPosition = e.target.scrollingElement.scrollTop;

    if (scrollPosition >= 1700) {
      this.step1Classes.remove('progress__active-step');
      this.step2Classes.remove('progress__active-step');
      this.step3Classes.remove('progress__active-step');
      this.step4Classes.add('progress__active-step');
    } else if (scrollPosition >= 1200) {
      this.step1Classes.remove('progress__active-step');
      this.step2Classes.remove('progress__active-step');
      this.step3Classes.add('progress__active-step');
      this.step4Classes.remove('progress__active-step');
    } else if (scrollPosition >= 600) {
      this.step1Classes.remove('progress__active-step');
      this.step2Classes.add('progress__active-step');
      this.step3Classes.remove('progress__active-step');
      this.step4Classes.remove('progress__active-step');
    } else {
      this.step1Classes.add('progress__active-step');
      this.step2Classes.remove('progress__active-step');
      this.step3Classes.remove('progress__active-step');
      this.step4Classes.remove('progress__active-step');
    }
  }
}
