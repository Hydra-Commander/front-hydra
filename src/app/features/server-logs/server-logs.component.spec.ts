import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLogsComponent } from './server-logs.component';

describe('LoginComponent', () => {
  let component: ServerLogsComponent;
  let fixture: ComponentFixture<ServerLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
