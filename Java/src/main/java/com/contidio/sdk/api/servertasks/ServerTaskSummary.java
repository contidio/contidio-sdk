package com.contidio.sdk.api.servertasks;

import java.util.LinkedList;
import java.util.List;

import com.contidio.sdk.exceptions.BackendException;

public class ServerTaskSummary {
	private int completedPercentage = 0;
	private int totalPercentage = 0;
	private List<BackendException> exceptions = new LinkedList<BackendException>();
	
	public ServerTaskSummary() {
		
	}
	
	public boolean isCompleted() {
		return completedPercentage == totalPercentage;
	}

	public int getCompletedPercentage() {
		return completedPercentage;
	}

	public void setCompletedPercentage(int completedPercentage) {
		this.completedPercentage = completedPercentage;
	}

	public int getTotalPercentage() {
		return totalPercentage;
	}

	public void setTotalPercentage(int totalPercentage) {
		this.totalPercentage = totalPercentage;
	}

	public List<BackendException> getExceptions() {
		return exceptions;
	}

	public boolean hasExceptions() {
		return !exceptions.isEmpty();
	}
	
	public void addException(BackendException exception) {
		exceptions.add(exception);
	}
	
	public void addExceptions(List<BackendException> exceptions) {
		this.exceptions.addAll(exceptions);
	}

	public ServerTaskSummary copy() {
		ServerTaskSummary copy = new ServerTaskSummary();
		
		copy.setCompletedPercentage(getCompletedPercentage());
		copy.setTotalPercentage(getTotalPercentage());
		copy.addExceptions(exceptions);
		
		return copy;
	}	
}
